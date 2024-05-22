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
function validateForm1(event) {
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

function validateForm2(event) {
    event.preventDefault(); // 防止表單提交
    const mainGoal = document.getElementById('main-goal').value;
    const nowWeight = document.getElementById('nowWeight').value;
    const goalWeight = document.getElementById('goalWeight').value;

    if (mainGoal !== "==請選擇==" && nowWeight && goalWeight) {
        // 所有字段都已填寫，進行下一步
        window.location.href = 'question3.html';
        
    } else {
        // 有字段未填寫，顯示警告信息
        alert('請填寫所有欄位');
    }
}

function validateForm3(event) {
    event.preventDefault(); // 防止表單提交
    const waterAns = document.querySelector('input[name="ques3"]:checked');

    if (waterAns) {
        // 所有字段都已填寫，進行下一步
        window.location.href = 'question4.html';
        
    } else {
        // 有字段未填寫，顯示警告信息
        alert('請填寫所有欄位');
    }
}

function validateForm4(event) {
    event.preventDefault(); // 防止表單提交
    const exerciseAns = document.querySelector('input[name="ques4"]:checked');

    if (exerciseAns) {
        // 所有字段都已填寫，進行下一步
        window.location.href = 'signIn.html';
        
    } else {
        // 有字段未填寫，顯示警告信息
        alert('請填寫所有欄位');
    }
}
// ============測驗 btn檢查欄位後到下一題  end=======
