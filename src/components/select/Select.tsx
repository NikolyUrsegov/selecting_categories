import React, {ChangeEvent} from 'react';
import s from './Select.module.scss'
import {DirectionType} from "../../state/directionsReducer";
import {CategoryType} from "../../state/optionsDirectionsReducer";
import {sort} from "../../common/utils/sort";

type SelectPropsType = {
    title?: string
    options: DirectionType[]
    category: CategoryType
    onChangeOptions: (e: ChangeEvent<HTMLSelectElement>) => void
    setCategory: (category: CategoryType) => void
}

export const Select: React.FC<SelectPropsType> = ({options, onChangeOptions, category, setCategory, title}) => {

    let optionsForRender = [...options]
    switch (category) {
        case "bank": {
            optionsForRender = sort(['ACRUB', 'SBERRUB', 'TCSBRUB'], options)
            break
        }
        case "crypto": {
            optionsForRender = sort(['BTC', 'ETH', 'USDTTRC'], options)
            break
        }
        case "nal": {
            optionsForRender = sort(['CASHUSD', 'CASHRUB'], options)
            break
        }
        default:
            optionsForRender = [...options]
    }

    return (
        <div className={s.block}>
            <div className={s.title}>
                {title && <h4>{title}</h4>}
            </div>
            <div className={s.filterBlock}>
                <button className={category === 'all' ? s.active : ''} onClick={() => setCategory('all')}>
                    Все
                </button>
                <button className={category === 'crypto' ? s.active : ''} onClick={() => setCategory('crypto')}>
                    Криптовалюта
                </button>
                <button className={category === 'nal' ? s.active : ''} onClick={() => setCategory('nal')}>
                    Наличные
                </button>
                <button className={category === 'bank' ? s.active : ''} onClick={() => setCategory('bank')}>
                    Банки
                </button>
            </div>
            <div className={s.inputBlock}>
                <input type="text" placeholder={'0.24891 - 12.061'}/>
                <select onChange={e => onChangeOptions(e)}>
                    {optionsForRender.map(el => {
                        return (<option value={el.code} key={el.name}>{el.name}</option>);
                    })}
                </select>
            </div>
        </div>
    )
};

