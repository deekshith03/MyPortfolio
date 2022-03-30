const typeWriter = document.getElementById("typewriter-text");
const text = "Computer Science UnderGraduate";
if(text!==null)
typeWriter.innerHTML = text;

typeWriter.style.setProperty("--characters", text.length);
