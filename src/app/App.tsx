import React, {ChangeEvent} from 'react';
import s from  './App.module.css';
import {Select} from "../components/select/Select";
import {useAppSelector} from "../state/store";
import {useDispatch} from 'react-redux'
import {changeActiveDirection, changeCategoryDirection} from "../state/directionsReducer";
import {CategoryType, changeCategoryOptions} from "../state/optionsDirectionsReducer";


function App() {
    const directions = useAppSelector(state => state.directions.directions)
    const OptionsDirectionType = useAppSelector(state => state.optionsDirections.activeOptions)
    const categoryDirections = useAppSelector(state => state.directions.category)
    const categoryFilter = useAppSelector(state => state.optionsDirections.category)
    const dispatch = useDispatch()

    const onChangeDirections = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeActiveDirection({code: e.currentTarget.value}))
    }

    const onChangeOptionsDirections = (e: ChangeEvent<HTMLSelectElement>) => {
        // функция для работы со вторым селектом
    }

    const setCategoryFilter = (category: CategoryType) => {
        dispatch(changeCategoryOptions({category}))
    }

    const setCategoryDirection = (category: CategoryType) => {
        dispatch(changeCategoryDirection({category}))
    }


    return (
        <div className={s.app}>
            <Select
                title={'Отдаете'}
                options={directions}
                onChangeOptions={onChangeDirections}
                category={categoryDirections}
                setCategory={setCategoryDirection}
            />
            <Select
                title={'Получаете'}
                options={OptionsDirectionType}
                onChangeOptions={onChangeOptionsDirections}
                category={categoryFilter}
                setCategory={setCategoryFilter}/>
        </div>
    );
}

export default App;
