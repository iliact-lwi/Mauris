const switchMonth = (currentDate?: Date, currentMonth?: number) => {
    let month;

    if(currentMonth !== undefined) {
        month = currentMonth;

        switch(month) {
            case 0: return 'января';
            case 1: return 'февраля';
            case 2: return 'марта';
            case 3: return 'апреля';
            case 4: return 'мая';
            case 5: return 'июня';
            case 6: return 'июля';
            case 7: return 'августа';
            case 8: return 'сентября';
            case 9: return 'октября';
            case 10: return 'ноября';
            case 11: return 'декабря';
    
            default: return 'Наверно придумали 13 месяц =)';
        }
    }

    month = currentDate!.getMonth();

    switch(month) {
        case 0: return 'Январь';
        case 1: return 'Февраль';
        case 2: return 'Март';
        case 3: return 'Апрель';
        case 4: return 'Май';
        case 5: return 'Июнь';
        case 6: return 'Июль';
        case 7: return 'Август';
        case 8: return 'Сентябрь';
        case 9: return 'Октябрь';
        case 10: return 'Ноябрь';
        case 11: return 'Декабрь';

        default: return 'Наверно придумали 13 месяц =)';
    }
}

export default switchMonth;