class MizoGame {
    constructor() {
        this.btn = document.getElementById('start-btn');
        this.log = document.getElementById('log');
        this.cups = [
            document.getElementById('c0'),
            document.getElementById('c1'),
            document.getElementById('c2')
        ];
        this.isBusy = false;
        
        this.btn.addEventListener('click', () => this.play());
    }

    play() {
        if(this.isBusy) return;
        this.isBusy = true;
        this.btn.disabled = true;

        // 1. إعادة الوضع الطبيعي (إنزال الكؤوس وإخفاء الكرة)
        this.cups.forEach(c => {
            c.classList.remove('lifted');
            c.querySelector('.ball').style.display = 'none';
        });

        this.updateLog(" جاري كشف مكان الكرة ... ");

        // 2. تفعيل تأثير الاهتزاز (Shake Animation)
        this.cups.forEach(c => c.classList.add('shaking'));

        // مدة الانتظار (2 ثانية)
        setTimeout(() => {
            // إيقاف الاهتزاز
            this.cups.forEach(c => c.classList.remove('shaking'));
            
            // 3. اختيار الفائز العشوائي
            const winnerIndex = Math.floor(Math.random() * 3);
            this.reveal(winnerIndex);
            
        }, 2000);
    }

    reveal(index) {
        this.updateLog(`تم تحديد الكرة في  رقم ${index + 1}`);
        
        const winningCup = this.cups[index];
        winningCup.classList.add('lifted');
        
        // إعادة الزر للعمل
        setTimeout(() => {
            this.isBusy = false;
            this.btn.disabled = false;
        }, 1000);
    }

    updateLog(text) {
        this.log.innerHTML = `<p>> ${text}</p>`;
    }
}

// تشغيل النظام
new MizoGame();