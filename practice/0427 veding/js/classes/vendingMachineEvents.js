class VendingMachineEvent {
    constructor() {
        const vMachine = document.querySelector('.section1');
        this.balance = vMachine.querySelector('.bg-box p');
        this.itemList = vMachine.querySelector('.cola-list');
        this.btnsColar = vMachine.querySelectorAll('.btn-cola');
        this.inputCostEl = vMachine.querySelector('#input-money');
        this.btnPut = vMachine.querySelector('#input-money+.btn');
        this.btnReturn = vMachine.querySelector('.bg-box+.btn');
        this.btnGet = vMachine.querySelector('.btn-get');
        this.stagedList = vMachine.querySelector('.get-list');


        const myinfo = document.querySelector('.section2');
        this.myMoney = myinfo.querySelector('.bg-box strong');

        const getInfo = document.querySelector('.section3');
        this.getList = getInfo.querySelector('.get-list');
        this.txtTotal = getInfo.querySelector('.total-price');
    }

    // 장바구니 콜라 생성 함수
    stagedItemGenerator(target) {
        const stagedItem = document.createElement('li');
        stagedItem.dataset.item = target.dataset.item;
        stagedItem.dataset.price = target.dataset.price;
        stagedItem.innerHTML = `
        <img src="./img/${target.dataset.img}" alt="">
            ${target.dataset.item}
        <strong>1
            <span class="a11y-hidden">개</span>
        </strong>
        `;
        this.stagedList.append(stagedItem);
    }


    bindEvent() {
    //todo 1. 입금 버튼 기능
    // 입급 버튼을 누르면
    // 1-1 쇼지금 === 소지금 - 입금액
    // 1-2 잔액 === 기존 잔액 + 입금액
    // 1-3 입금액이 소지금보다 많으면 경고장 출력
    // 1-4 같은 제품이 들어올때 카운트 올라가기
    // 1-5 입금액이 정산적으로 입금되면 입금창은 초기화
    this.btnPut.addEventListener('click', () => {
        const inputCost = parseInt(this.inputCostEl.value); // 입력값
        const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',' , "")); // 소지금
        const balanceVal = parseInt(this.balance.textContent.replaceAll(',' , "")); // 잔액

        if(inputCost){ // 한번 거르기 소지금이 있는지
            if(inputCost <= myMoneyVal && inputCost > 0){ // 입금액이 소지금 보다 적거나 같고 0보다 크고
                this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost)  + '원';

                this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + '원';

            } else { // 입금액이 소지금 보다 많다
                alert('소지금이 부족합니다.')
            }

            this.inputCostEl.value = null; // 입금액 초기화
        }
    });


     //todo 2. 거스름돈 반환
    // 반환 버튼을 누르면
    // 2-1 쇼지금 === 소지금 + 잔액
    // 1-2 잔액창 초기화
    this.btnReturn.addEventListener('click', () => {
        const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',' , "")); // 소지금
        const balanceVal = parseInt(this.balance.textContent.replaceAll(',' , "")); // 잔액
        
        if(balanceVal) {
            this.myMoney.textContent = new Intl.NumberFormat().format(balanceVal + myMoneyVal)  + '원';
            this.balance.textContent = null; // 입금액 초기화
        }

    })


    //todo 3. 자판기 장바구니 채우기
    // 반환 버튼을 누르면
    // 3-1 잔액 === 잔액 - 음료가격
    // 3-2 잔액이 없으면 경고창
    // 3-3 음료가 장바구니에 들어감
    // 3-4 음료의 count - 1
    // 3-5 음료의 count 가 0이 되면 품절 표시
    this.btnsCola = document.querySelectorAll('.section1 .btn-cola');

    this.btnsCola.forEach((item) => {
        item.addEventListener('click', (event) => {
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
            const targetEl = event.currentTarget;
            const targetElPrice = parseInt(targetEl.dataset.price);
            const stagedListItem = this.stagedList.querySelectorAll('li');
            let isStaged = false; // 이미 장바구니에 있는가?

            if (balanceVal >= targetElPrice) {
                this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + '원';

                // 클릭한 콜라의 이름과 장바구니에 있던 콜라의 이름이 같은지 비교!
                for(const item of stagedListItem) {

                    if(targetEl.dataset.item === item.dataset.item){

                        // 이미 장바구니에 콜라가 있다면 카운트 + 1
                        item.querySelector('strong').firstChild.textContent = parseInt(item.querySelector('strong').firstChild.textContent) + 1;

                        isStaged = true;
                        break;
                    }
                }

                if(!isStaged){
                    // 처음 선택했을 경우만 장바구니 콜라 생성
                    this.stagedItemGenerator(event.currentTarget);
                }

                // 콜라 수 차감
                targetEl.dataset.count--;

                //! 콜라 품절 insertAdjacenHTML 이거 에러뜨네
                if(!parseInt(targetEl.dataset.count)) {
                    targetEl.insertAdjacenHTML('beforeEnd', `
                        <strong class="soldout">
                        <span>품절</span>
                        </strong>
                    `);

                    targetEl.disabled = 'disabled';

                }

            } else {
                alert('입금한 금액이 부족합니다.');
            }
        })
    })

    //todo 4. 획득 버튼 기능
    // 획득 버튼을 누르면
    // 4-1 장바구니에 있는 음료수 목록이 획득한 음료 목록으로 이동합니다.
    // 4-2 획득한 음료의 모든 금액을 합하여 총 금액을 업데이트 합니다.

    this.btnGet.addEventListener('click', () => {
        const itemStagedList = this.stagedList.querySelectorAll('li');
        const itemGetList = this.getList.querySelectorAll('li');
        let totalPrice = 0;
        
        for (const itemStaged of itemStagedList) {
            let isGet = false; // 이미 획득했는가?
            for(const itemGet of itemGetList){
                //장바구니의 콜라가 이미 획득한 목록에 있다면
                if(itemStaged.dataset.item === itemGet.dataset.item){
                    itemGet.querySelector('strong').firstChild.textContent = parseInt(itemGet.querySelector('strong').firstChild.textContent) + parseInt(itemStaged.querySelector('strong').firstChild.textContent);

                    isGet = true;
                    break;
                }
            }

            if(!isGet){
                this.getList.append(itemStaged);
            }
        }

        // 장바구니 목록 초기화
        this.stagedList.innerHTML = null;

        // 획득한 음료 이스틀르 순회하면서 총금액 계산
        itemStagedList.forEach((itemGet) => {

            totalPrice += parseInt(itemGet.dataset.price) * parseInt(itemGet.querySelector('strong').firstChild.textContent);
        });

        this.txtTotal.textContent = `총금액 : ${new Intl.NumberFormat().format(totalPrice)} 원`
    

    });
}

};

export default VendingMachineEvent;