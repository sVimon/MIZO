// قائمة الـ IDs المقبولة (تأكد أنها 10 أرقام)
const ALLOWED_IDS = [
    "1111122222",
    "1822828838",
    "1553276807",
    "1553851911",
    "1553847377",
    "1554226135",
    "1554356173",
    "1554233391",
    "1554224455",
    "1344556675",
    "1554219249",
    "1553835221",
    "1554034205",
    "1553568899",
    "1553917485",
    "1554258991",
    "1553839531",
    "1553716791",
    "1553713523",
    "1553726671",
    "1554319729",
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


























