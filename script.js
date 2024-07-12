function typeWriter(text, elementId, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.onload = function() {
    const aboutText = "Hi, I'm Victoria. I'm a UI/UX designer who makes apps and websites look good and easy to use. I love working with teams to create designs that makes people happy and excited to use.";
    document.getElementById('about-text').innerHTML = ''; // Clear the initial text
    typeWriter(aboutText, 'about-text', 50); // Adjust the speed as necessary
};