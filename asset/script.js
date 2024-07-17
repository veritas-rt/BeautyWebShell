document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const output = document.getElementById("output");

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const command = input.value;
            executeCommand(command);
            input.value = "";
        }
    });

    function executeCommand(command) {
        const response = `You entered: ${command}`;
        appendOutput(response);
    }

    function appendOutput(text) {
        console.log("EXEC")
        /*
        const newLine = document.createElement("div");
        newLine.textContent = text;
        output.appendChild(newLine);
        output.scrollTop = output.scrollHeight;
        */
        output.text = readonlyInput.textContent + "\r\n" + text;
    }
});
