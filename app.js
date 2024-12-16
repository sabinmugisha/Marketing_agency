document.getElementById('adForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const businessDescription = document.getElementById('businessDescription').value;
    console.log(`Generating ad for: ${businessDescription}`);
    document.getElementById('adOutput').innerText = 'Your ad will appear here!';
});
