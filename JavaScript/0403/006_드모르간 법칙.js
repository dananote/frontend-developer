// 드모르간 법칙
        // 드모르간 법칙을 이용해서 무조건 true가 되는 곳이나 무조건 false가 되는 구간을 발견할 수 있습니다. 또는 조건을 단순화 할 수 있습니다.
        const x = 0;
        const y = 1;
        console.log(!(x || y) === (!x && !y))
        console.log((x && y) === (!x || !y))


        // 어? 이 코드가 무조간 false가 되네? -> 코드 전체 삭제
        if((!x && !y)) {
          console.log('hello')
        }

        // 어? 이 코드가 무조간 true가 되네? -> if문을 제거

        if(!(x || y)) {
          console.log('hello')
        }

        // 변경후
        cosnoel.log('hello')