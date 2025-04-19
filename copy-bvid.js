window.onload = function () {
    const copyBtns = document.querySelectorAll('.copy-bvid-btn');
    copyBtns.forEach(function (btn) {
        btn.addEventListener('click', async function () {
            const bvid = this.dataset.bvid;
            try {
                await navigator.clipboard.writeText(bvid);
                const tooltip = document.createElement('div');
                tooltip.style.position = 'fixed';
                tooltip.style.top = '10px';
                tooltip.style.right = '10px';
                tooltip.style.backgroundColor = '#000';
                tooltip.style.color = '#fff';
                tooltip.style.padding = '5px 10px';
                tooltip.style.borderRadius = '5px';
                tooltip.textContent = '已复制 Bv 号到剪切板';
                document.body.appendChild(tooltip);
                setTimeout(() => {
                    document.body.removeChild(tooltip);
                }, 2000);
            } catch (err) {
                console.error('复制失败: ', err);
            }
        });
    });
};    