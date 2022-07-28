// 변경 감지
document.querySelector("#Thing").addEventListener('change', (e) => {
    e.stopPropagation();
    e.preventDefault();
});