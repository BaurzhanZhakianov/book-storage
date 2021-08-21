const AboutPage = () => {
    return (
        <div className='text-center my-5'>
            <div className='mb-4 fs-3'>
                Применил полученые знания о React Redux Typescript из следующих источников:
            </div>
            <div className='row'>
                <div className='col-sm-6 p-2'>
                    <div className='mb-2 text-uppercase text-danger'>Текстовый материал:</div>
                    <ul className='list-unstyled'>
                        <li><a className='text-info' href="https://ru.reactjs.org/">ReactJS</a></li>
                        <li><a className='text-info' href="https://github.com/rajdee/redux-in-russian">Redux</a>
                        </li>
                        <li><a className='text-info' href="https://www.typescriptlang.org/docs/">Typescript</a></li>
                    </ul>
                </div>
                <div className='col-sm-6 p-2'>
                    <div className='mb-2 text-uppercase text-danger'>Видеоматериал:</div>
                    <ul className='list-unstyled'>
                        <li><a className='text-info' href="https://www.udemy.com/course/pro-react-redux/">
                            Юрий Бура, React + Redux. Практическая разработка коммерческих React приложений
                        </a></li>
                        <li><a className='text-info' href="https://www.udemy.com/course/react-2020-complete-guide/">
                            Владилен Минин, React JS. Практический курс 2020 (вкл. Хуки, Классы, Redux)
                        </a></li>
                        <li><a className='text-info'
                               href="https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8">
                            ReactJS - Путь самурая (Redux Thunk Saga)
                        </a></li>
                    </ul>
                </div>
                <div className='col-sm-6 p-2'>
                    <div className='mb-2 text-uppercase text-danger'>Реализовано:</div>
                    <ul className='list-unstyled'>
                        <li>Поиск, фильтрация, сортировка книг</li>
                        <li>Динамическая пагинация</li>
                        <li>Обработка загрузки и ошибок</li>
                        <li>Работа с API</li>
                        <li>Динамический роутинг по карточкам</li>
                        <li>Адаптив</li>
                        <li>Оптимизация компонентов</li>
                    </ul>
                </div>
                <div className='col-sm-6 p-2'>
                    <div className='mb-2 text-uppercase text-danger'>Затронутые темы:</div>
                    <ul className='list-unstyled'>
                        <li>Глобальное хранилище</li>
                        <li>Роутинг</li>
                        <li>Условный рендеринг</li>
                        <li>Референсы</li>
                        <li>Хуки</li>
                        <li>Компоненты высшего порядка</li>
                        <li>Средства отладки кода redux-dev-tools</li>
                        <li>Bootstrap 5</li>
                        <li>Регулярные выражения</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
