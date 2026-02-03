// قائمة الـ IDs المقبولة (تأكد أنها 10 أرقام)
const ALLOWED_IDS = [
    "1111122222",
    "1822828838",
    "1344556675",
    "0000000000",
    "1553696781",
    "1918771800",
    "1553693811",
]; 

const btn = document.getElementById('check-btn');
const input = document.getElementById('user-id');
const modal = document.getElementById('loading-modal');
const msg = document.getElementById('msg-box');

btn.addEventListener('click', () => {
    const val = input.value;

    // 1. التحقق من الطول (10 أرقام)
    if(val.length !== 10) {
        msg.innerText = "خطأ: يجب أن يتكون الـ ID من 10 أرقام.";
        msg.style.color = "red";
        return;
    }

    // 2. إظهار نافذة التحميل
    modal.style.display = 'flex';

    // 3. محاكاة الاتصال بالسيرفر (3 ثواني)
    setTimeout(() => {
        // التحقق من القائمة
        if(ALLOWED_IDS.includes(val)) {
            window.location.href = 'results.html';
        } else {
            modal.style.display = 'none';
            msg.innerText = "تم رفض الوصول: هذا الـ ID غير مسجل.";
            msg.style.color = "red";
        }
    }, 3000);

});






