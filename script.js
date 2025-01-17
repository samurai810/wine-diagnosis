document.addEventListener("DOMContentLoaded", () => {
    // 全ての選択肢ボタンを取得
    const optionButtons = document.querySelectorAll(".option");

    // ボタンがクリックされたときの処理
    optionButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const optionsGroup = button.parentElement.querySelectorAll(".option");

            // 同じグループ内の他のボタンの選択状態を解除
            optionsGroup.forEach((option) => option.classList.remove("selected"));

            // クリックされたボタンを選択状態にする
            button.classList.add("selected");

            // 対応する hidden input の値を設定
            const questionName = button.getAttribute("data-name");
            const questionValue = button.getAttribute("data-value");
            const hiddenInput = document.querySelector(`input[name="${questionName}"]`);

            if (hiddenInput) {
                hiddenInput.value = questionValue;
            }
        });
    });

    // デフォルト値を設定（未選択の場合、デフォルトで0を設定）
    const form = document.getElementById("question-form");
    form.addEventListener("submit", () => {
        const hiddenInputs = form.querySelectorAll("input[type='hidden']");
        hiddenInputs.forEach((input) => {
            if (!input.value) {
                input.value = "0"; // 未選択の場合は 0 を設定
            }
        });
    });
});
