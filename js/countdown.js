let countdown = setInterval(function(){
    const now = new Date()  //今の日時
    const target = new Date("2022-10-29T10:00:00+09:00")
    const remainTime = target - now  //差分を取る（ミリ秒で返ってくる

    //指定の日時を過ぎていたら処理をしない
    if(remainTime < 0) {
        const countdownArea = document.getElementById('countdownArea')
        coutdownArea.innerHTML = '開催中'
        clearInterval(countdown)
    }

    //差分の日・時・分・秒を取得
    const difDay  = Math.floor(remainTime / 1000 / 60 / 60 / 24)
    const difHour = Math.floor(remainTime / 1000 / 60 / 60 ) % 24
    const difMin  = Math.floor(remainTime / 1000 / 60) % 60
    const difSec  = Math.floor(remainTime / 1000) % 60

    //残りの日時を上書き
    document.getElementById("countdown-day").textContent  = difDay
    document.getElementById("countdown-hour").textContent = difHour
    document.getElementById("countdown-min").textContent  = difMin
    //秒単位で実装したい場合document.getElementById("countdown-sec").textContent  = difSec、<span id="countdown-sec"></span>秒

    //指定の日時になればカウントを止める
    if(remainTime < 0) clearInterval(countdown)

    }, 1000)    //1秒間に1度処理
