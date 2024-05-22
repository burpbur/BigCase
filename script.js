var ctx = document.getElementById('weightChart').getContext('2d');
var weightChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['一月', '二月', '三月', '四月', '五月', '六月'],
        datasets: [{
            label: '現在體重 (kg)',
            data: [70, 69, 68, 67, 66, 65],
            borderColor: 'rgb(75, 192, 192)',
            fill: false
        }, {
            label: '目標體重 (kg)',
            data: [65, 65, 65, 65, 65, 65],
            borderColor: 'rgb(255, 99, 132)',
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: '月份'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: '體重 (kg)'
                }
            }
        }
    }
});
// ============測驗 btn檢查欄位後到下一題  start=======
function validateForm(event) {
    event.preventDefault(); // 防止表單提交
    const gender = document.querySelector('input[name="gender"]:checked');
    const birth = document.getElementById('birth').value;
    const height = document.getElementById('height').value;

    if (gender && birth && height) {
        // 所有字段都已填寫，進行下一步
        window.location.href = 'question2.html';
    } else {
        // 有字段未填寫，顯示警告信息
        alert('請填寫所有欄位');
    }
}

function validateForm1(event) {
    event.preventDefault(); // 防止表單提交
    const mG = document.getElementById('main-goal').value;
    const nW = document.getElementById('nowWeight').value;
    const gW = document.getElementById('goalWeight').value;

    if (mG !== "==請選擇==" && nW && gW) {
        // 所有字段都已填寫，進行下一步
        window.location.href = 'question3.html';
        
    } else {
        // 有字段未填寫，顯示警告信息
        alert('請填寫所有欄位');
    }
}
// ============測驗 btn檢查欄位後到下一題  end=======
