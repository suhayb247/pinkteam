document.getElementById('downloadBtn').addEventListener('click', function () {
    const receiptContent = document.querySelector('.receipt').outerHTML;
    const blob = new Blob([receiptContent], { type: 'application/octet-stream' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'receipt.html';
    link.click();
});
