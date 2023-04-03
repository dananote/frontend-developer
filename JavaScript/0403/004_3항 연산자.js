// 3항 연산자
        // 조건식 ? 참일 경우 실행되는 표현식 : 거짓일 경우 실행되는 표현식
        // 3항 연산자는 2개이상 중첩하지 않기(가독성이 떨어짐) 그럴땐 가능하면 조건문 사용

        let sale = true;
        price = sale ? 100 : 200; // true라면 앞에꺼 false라면 뒤에꺼
        console.log(price) // 100 반환

        // const sale = true;
        // const prcie = sale ? 100 : 200;
        // console.log(price)

        // const price = 7000 // 밑에 값 비싸요 출력
        const price = 3000 // 밑에 값 저렴해요 출력
        const message = price >= 5000 ? '비싸요' : '저렴해요'

        // 9000원 이상이면 비싸다
        // 9000원 미만이고 7000원 이상이면 적절하다
        // 7000원 미만이면 저렴하다 
        const price2 = 7500 
        const message2 = (price2 >= 9000) ? '비싸요' : ((price2 >= 7000) ? '적절해요' : 저렴해요)