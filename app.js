document.addEventListener("DOMContentLoaded", () => {
    // 状態管理変数
    let currentAngle = 0;
    let isHeld = false;
    let historyData = [];

    // HTML要素の取得
    const splashScreen = document.getElementById("splash-screen");
    const angleDisplay = document.getElementById("current-angle");
    const modeBadge = document.getElementById("current-mode-badge");
    const btnHold = document.getElementById("btn-hold");
    const btnSave = document.getElementById("btn-save");
    const btnCsv = document.getElementById("btn-csv");
    
    const selectCategory = document.getElementById("select-category");
    const selectJoint = document.getElementById("select-joint");
    const selectMovement = document.getElementById("select-movement");
    
    const medicalInfoBox = document.getElementById("medical-info-box");
    const infoTitle = document.getElementById("info-title");
    const infoBaseAxis = document.getElementById("info-base-axis");
    const infoMoveAxis = document.getElementById("info-move-axis");
    const infoNormalValue = document.getElementById("info-normal-value");
    const btnHelpToggle = document.getElementById("btn-help-toggle");
    const helpContentBox = document.getElementById("help-content-box");
    const infoHelpText = document.getElementById("info-help-text");
    
    const historyTbody = document.getElementById("history-tbody");
    const tutorialModal = document.getElementById("tutorial-modal");
    const btnTutorialClose = document.getElementById("btn-tutorial-close");
    const btnTutorialTrigger = document.getElementById("btn-tutorial-trigger");

    // 自作スプラッシュ画面の制御（1.5秒後にフワッと消す）
    setTimeout(() => {
        splashScreen.style.opacity = "0";
        setTimeout(() => {
            splashScreen.classList.add("hidden");
            // 初回起動時のみチュートリアルを表示（localStorageで判定）
            if (!localStorage.getItem("smagoni_tutorial_seen")) {
                tutorialModal.classList.remove("hidden");
            }
        }, 500);
    }, 1500);

    // チュートリアルの制御
    btnTutorialClose.addEventListener("click", () => {
        tutorialModal.classList.add("hidden");
        localStorage.setItem("smagoni_tutorial_seen", "true");
        requestSensorPermission(); // センサーの許可を求める
    });
    btnTutorialTrigger.addEventListener("click", () => {
        tutorialModal.classList.remove("hidden");
    });

    // 傾きセンサーの連動（スマートフォン用）
    function requestSensorPermission() {
        if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
            // iOS (Safari) 用の権限リクエスト
            DeviceOrientationEvent.requestPermission()
                .then(response => {
                    if (response === 'granted') {
                        window.addEventListener('deviceorientation', handleOrientation);
                    } else {
                        alert('センサーの利用が拒否されました。設定から許可してください。');
                    }
                })
                .catch(console.error);
        } else {
            // AndroidやPCなど通常のブラウザ用
            window.addEventListener('deviceorientation', handleOrientation);
        }
    }

    function handleOrientation(event) {
        if (isHeld) return; // ホールド中は角度更新をストップ

        // スマホの縦持ち・横持ちの傾き（主にβかγを使用）
        // 臨床現場でスマホの側面を当てるケースを考慮し、ピッチ(beta)またはロール(gamma)から角度を計算
        let angle = 0;
        
        // 簡易的にスマホのピッチ方向の傾き（手前・奥への傾き）をベースに0〜180度に補正
        let rawBeta = event.beta || 0; 
        angle = Math.abs(Math.round(rawBeta));

        if (angle > 180) angle = 180;
        
        currentAngle = angle;
        angleDisplay.textContent = currentAngle;
    }

    // ホールドボタンの処理
    btnHold.addEventListener("click", () => {
        if (!isHeld) {
            // ホールド（固定）する
            isHeld = true;
            btnHold.textContent = "ホールド解除 (リセット)";
            btnHold.style.backgroundColor = "#e53e3e"; // 赤色に変更
            modeBadge.textContent = "⚠️ 角度ホールド中";
            modeBadge.style.backgroundColor = "#e53e3e";
            btnSave.disabled = false; // 保存ボタンを押せるようにする
        } else {
            // 解除する
            isHeld = false;
            btnHold.textContent = "角度をホールド (固定)";
            btnHold.style.backgroundColor = "#3182ce"; // 元の青色に
            modeBadge.textContent = "リアルタイム計測モード";
            modeBadge.style.backgroundColor = "#2b6cb0";
            btnSave.disabled = true;
        }
    });

    // 計測結果の記録処理
    btnSave.addEventListener("click", () => {
        const categoryKey = selectCategory.value;
        const jointKey = selectJoint.value;
        const movementKey = selectMovement.value;

        let label = "任意の計測";
        if (categoryKey && jointKey && movementKey) {
            const jointName = ROM_MASTER_DATA[categoryKey].joints[jointKey].name;
            const moveName = ROM_MASTER_DATA[categoryKey].joints[jointKey].movements[movementKey].name;
            label = `${jointName}(${moveName})`;
        }

        const now = new Date();
        const timeStr = `${now.getMonth()+1}/${now.getDate()} ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

        // 履歴データに追加
        const record = { label: label, angle: currentAngle, time: timeStr };
        historyData.push(record);

        // テーブルの更新
        updateHistoryTable();

        // アラートの代わりに一瞬ボタンの色を変えて通知
        const originalText = btnSave.textContent;
        btnSave.textContent = "✓ 記録しました！";
        btnSave.style.backgroundColor = "#2f855a";
        setTimeout(() => {
            btnSave.textContent = originalText;
            btnSave.style.backgroundColor = "#38a169";
        }, 1200);
    });

    function updateHistoryTable() {
        if (historyData.length === 0) {
            historyTbody.innerHTML = '<tr><td colspan="3" class="empty-message">まだ記録はありません</td></tr>';
            return;
        }

        historyTbody.innerHTML = historyData.map(item => `
            <tr>
                <td><strong>${item.label}</strong></td>
                <td><span style="font-size:1.2rem; font-weight:bold;">${item.angle}°</span></td>
                <td style="color:#718096; font-size:0.9rem;">${item.time}</td>
            </tr>
        `).join("");
    }

    // CSV出力機能
    btnCsv.addEventListener("click", () => {
        if (historyData.length === 0) {
            alert("出力する履歴データがありません。先に計測を記録してください。");
            return;
        }

        // CSVのヘッダー（医療現場での扱いやすさを考慮しBOM付きUTF-8でExcel文字化け回避）
        let csvContent = "\uFEFF関節・運動方向,計測角度,日時\n";
        
        historyData.forEach(item => {
            csvContent += `"${item.label}","${item.angle}°","${item.time}"\n`;
        });

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `スマゴニ_計測結果_${new Date().toISOString().slice(0,10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // --- 連動セレクトボックスの制御 ---
    selectCategory.addEventListener("change", () => {
        const catKey = selectCategory.value;
        selectJoint.innerHTML = '<option value="">-- 関節を選択 --</option>';
        selectMovement.innerHTML = '<option value="">-- 運動方向を選択 --</option>';
        selectJoint.disabled = !catKey;
        selectMovement.disabled = true;
        medicalInfoBox.classList.add("hidden");

        if (catKey && ROM_MASTER_DATA[catKey]) {
            const joints = ROM_MASTER_DATA[catKey].joints;
            for (let key in joints) {
                const opt = document.createElement("option");
                opt.value = key;
                opt.textContent = joints[key].name;
                selectJoint.appendChild(opt);
            }
        }
    });

    selectJoint.addEventListener("change", () => {
        const catKey = selectCategory.value;
        const jointKey = selectJoint.value;
        selectMovement.innerHTML = '<option value="">-- 運動方向を選択 --</option>';
        selectMovement.disabled = !jointKey;
        medicalInfoBox.classList.add("hidden");

        if (catKey && jointKey && ROM_MASTER_DATA[catKey].joints[jointKey]) {
            const movements = ROM_MASTER_DATA[catKey].joints[jointKey].movements;
            for (let key in movements) {
                const opt = document.createElement("option");
                opt.value = key;
                opt.textContent = movements[key].name;
                selectMovement.appendChild(opt);
            }
        }
    });

    selectMovement.addEventListener("change", () => {
        const catKey = selectCategory.value;
        const jointKey = selectJoint.value;
        const moveKey = selectMovement.value;

        if (catKey && jointKey && moveKey) {
            const data = ROM_MASTER_DATA[catKey].joints[jointKey].movements[moveKey];
            const jointName = ROM_MASTER_DATA[catKey].joints[jointKey].name;
            
            infoTitle.textContent = `${jointName}：${data.name}`;
            infoBaseAxis.textContent = data.baseAxis;
            infoMoveAxis.textContent = data.moveAxis;
            infoNormalValue.textContent = data.normalValue;
            infoHelpText.textContent = data.helpText;
            
            medicalInfoBox.classList.remove("hidden");
            helpContentBox.classList.add("hidden"); // 開いたときはヘルプは閉じておく
        } else {
            medicalInfoBox.classList.add("hidden");
        }
    });

    // かみくだきヘルプのトグル動作
    btnHelpToggle.addEventListener("click", () => {
        helpContentBox.classList.toggle("hidden");
    });
});