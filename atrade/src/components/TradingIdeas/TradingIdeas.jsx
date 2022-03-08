import React from 'react';
import classes from './TradingIdeas.module.css';
import Carousel from '../UI/Carousel/Carousel';
import Idea from "./Idea/Idea";
import Notification from "./Notification/Notification";
import Stub from "./Stub/Stub";

const TradingIdeas = (props) => {
    const ideaRef = React.useRef();
    const day = new Date().getDay();

    const ideas = [
        {
            id: "1",
            curr_id: "1",
            name: "EUR/USD",
            type_rus: "Покупка",
            type_eng: "Buy",
            type_id: "1",
            type: "up",
            img: "EUR/eur.svg",
            svg_path: "0,120 28,125  56, 128 84,119 113,105 141,110 169,95 197,100 225,105 253,55  282,45 310,60 338,65 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_price: "",
            screen: "",
            scree_text: "",
            price: "1.18960",
            take_profit: "1.18560",
            stop_loss: "1.19210",
            risk: "",
            title_rus: "Евро дошел до верхней границы восходящего канала",
            title_eng: "Euro has reached the upper limit of the eastern channel",
            text_rus: "<p>Заседание Европейского центрального банка было основным событием для валютного рынка на пошлой неделе. Монетарная политика оставлена без изменений, что, поначалу, было воспринято рынком так, что дефляционные тенденции и курс евро пока ещё не тревожат Центральный банк Европы." +
                "<p>Валютная пара EUR/USD попробовала было расти, но последующие комментарии представителей Центробанка пресекли эти попытки. Суть комментариев в том, что хотя Центробанк не управляет курсом, он таргетирует инфляцию, а сильный евро подавляет инфляцию, и, как следствие, может провоцировать расширение мер монетарного стимулирования." +
                "<p>Пара по-прежнему перегружена спекулятивными лонгами, сэнтимент, формируемый прогнозами роста от ведущих банков, по-прежнему экстремально бычий. Именно поэтому ожидаем тест уровня сопротивления 1,19050 и коррекцию до уровня поддержки 1,18560.",

            text_eng: "<p>The meeting of the European Central Bank was an event for the foreign exchange market last week. Monetary policy was left unchanged, which, at first, was accepted by the market so that deflationary meetings and the euro rate do not yet worry the Central Bank of Europe." +
                "<p>The EUR/USD currency pair tried to grow, but subsequent comments from the representatives of the Central Bank stopped these attempts. The essence of the comments is that although the Central Bank does not control the exchange rate, it targets inflation, and a strong euro suppresses inflation, and, as a result, can provoke an expansion of monetary stimulus measures." +
                "<p>The pair is still loaded with speculative longs, and the sentiment driven by growth forecasts from leading banks is still extremely bullish. That is why we expect a test of the resistance level of 1.19050 and a correction to the support level of 1.18560.",
            date: "",
            full_date: "15-09-2022",
            year: "",
        },

        {
            id: "2",
            curr_id: "2",
            name: "AUD/USD",
            type_rus: "Продажа",
            type_eng: "Sell",
            type_id: "2",
            type: "down",
            img: "EUR/eur.svg",
            svg_path: "0,100 28,108  56,100 84,103 113,112 141,118 169,85 197,80 225,110 253,68  282,83 310,96  338,90 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_plus: "",
            result_minus: "",
            screen: "",
            scree_text: "",
            price: "",
            take_profit: "",
            stop_loss: "",
            risk: "",
            title: "",
            text: "",
            preview_text: "",
            date: "",
            full_date: "",
            year: "",
        },

        {
            id: "3",
            curr_id: "3",
            name: "EUR/USD",
            type_rus: "Покупка",
            type_eng: "Buy",
            type_id: "1",
            type: "up",
            img: "EUR/eur.svg",
            svg_path: "0,120 28,125  56, 128 84,119 113,105 141,110 169,95 197,100 225,105 253,55  282,45 310,60 338,65 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_plus: "",
            result_minus: "",
            screen: "",
            scree_text: "",
            price: "",
            take_profit: "",
            stop_loss: "",
            risk: "",
            title: "",
            text: "",
            preview_text: "",
            date: "",
            full_date: "",
            year: "",
        },

        {
            id: "4",
            curr_id: "4",
            name: "GBP/USD",
            type_rus: "Продажа",
            type_eng: "Sell",
            type_id: "2",
            type: "down",
            img: "EUR/eur.svg",
            svg_path: "0,115 28,115  56,125 84,120 113,122 141,123 169,120 197,100 225,110 253,80  282,85 310,50  338,60 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_plus: "",
            result_minus: "",
            screen: "",
            scree_text: "",
            price: "",
            take_profit: "",
            stop_loss: "",
            risk: "",
            title: "",
            text: "",
            preview_text: "",
            date: "",
            full_date: "",
            year: "",
        },

        {
            id: "5",
            curr_id: "4",
            name: "GBP/USD",
            type_rus: "Продажа",
            type_eng: "Sell",
            type_id: "2",
            type: "down",
            img: "EUR/eur.svg",
            svg_path: "0,115 28,115  56,125 84,120 113,122 141,123 169,120 197,100 225,110 253,80  282,85 310,50  338,60 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_plus: "",
            result_minus: "",
            screen: "",
            scree_text: "",
            price: "",
            take_profit: "",
            stop_loss: "",
            risk: "",
            title: "",
            text: "",
            preview_text: "",
            date: "",
            full_date: "",
            year: "",
        },

        {
            id: "6",
            curr_id: "4",
            name: "GBP/USD",
            type_rus: "Покупка",
            type_eng: "Buy",
            type_id: "1",
            type: "up",
            img: "EUR/eur.svg",
            svg_path: "0,115 28,115  56,125 84,120 113,122 141,123 169,120 197,100 225,110 253,80  282,85 310,50  338,60 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_plus: "",
            result_minus: "",
            screen: "",
            scree_text: "",
            price: "",
            take_profit: "",
            stop_loss: "",
            risk: "",
            title: "",
            text: "",
            preview_text: "",
            date: "",
            full_date: "",
            year: "",
        },

        {
            id: "7",
            curr_id: "4",
            name: "GBP/USD",
            type_rus: "Покупка",
            type_eng: "Buy",
            type_id: "1",
            type: "up",
            img: "EUR/eur.svg",
            svg_path: "0,115 28,115  56,125 84,120 113,122 141,123 169,120 197,100 225,110 253,80  282,85 310,50  338,60 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_plus: "",
            result_minus: "",
            screen: "",
            scree_text: "",
            price: "",
            take_profit: "",
            stop_loss: "",
            risk: "",
            title: "",
            text: "",
            preview_text: "",
            date: "",
            full_date: "",
            year: "",
        },

        {
            id: "8",
            curr_id: "4",
            name: "GBP/USD",
            type_rus: "Покупка",
            type_eng: "Buy",
            type_id: "1",
            type: "up",
            img: "EUR/eur.svg",
            svg_path: "0,115 28,115  56,125 84,120 113,122 141,123 169,120 197,100 225,110 253,80  282,85 310,50  338,60 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_plus: "",
            result_minus: "",
            screen: "",
            scree_text: "",
            price: "",
            take_profit: "",
            stop_loss: "",
            risk: "",
            title: "",
            text: "",
            preview_text: "",
            date: "",
            full_date: "",
            year: "",
        },

        {
            id: "9",
            curr_id: "4",
            name: "GBP/USD",
            type_rus: "Покупка",
            type_eng: "Buy",
            type_id: "1",
            type: "up",
            img: "EUR/eur.svg",
            svg_path: "0,115 28,115  56,125 84,120 113,122 141,123 169,120 197,100 225,110 253,80  282,85 310,50  338,60 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_plus: "",
            result_minus: "",
            screen: "",
            scree_text: "",
            price: "",
            take_profit: "",
            stop_loss: "",
            risk: "",
            title: "",
            text: "",
            preview_text: "",
            date: "",
            full_date: "",
            year: "",
        },

        {
            id: "10",
            curr_id: "4",
            name: "GBP/USD",
            type_rus: "Покупка",
            type_eng: "Buy",
            type_id: "1",
            type: "up",
            img: "EUR/eur.svg",
            svg_path: "0,115 28,115  56,125 84,120 113,122 141,123 169,120 197,100 225,110 253,80  282,85 310,50  338,60 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_plus: "",
            result_minus: "",
            screen: "",
            scree_text: "",
            price: "",
            take_profit: "",
            stop_loss: "",
            risk: "",
            title: "",
            text: "",
            preview_text: "",
            date: "",
            full_date: "",
            year: "",
        },

        {
            id: "12",
            curr_id: "4",
            name: "GBP/USD",
            type_rus: "Покупка",
            type_eng: "Buy",
            type_id: "1",
            type: "up",
            img: "EUR/eur.svg",
            svg_path: "0,115 28,115  56,125 84,120 113,122 141,123 169,120 197,100 225,110 253,80  282,85 310,50  338,60 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_plus: "",
            result_minus: "",
            screen: "",
            scree_text: "",
            price: "",
            take_profit: "",
            stop_loss: "",
            risk: "",
            title: "",
            text: "",
            preview_text: "",
            date: "",
            full_date: "",
            year: "",
        },


    ];

    const itemStub = [
        { id: "1", name: "Заглушка 1" },
        { id: "2", name: "Заглушка 2" },
        { id: "3", name: "Заглушка 3" },
        { id: "4", name: "Заглушка 4" },
    ]

    return (
        <div className={classes.ideas}>
            <div className={classes.ideas_inner}>
                {/*Trading Ideas in Carousel*/}
                {(day !== 6 && day !== 0) &&
                <Carousel settings={ideaRef} widthItem={299} speed="0.35s ease" >
                    <Idea ideas={ideas} ref={ideaRef} />
                </Carousel>
                }
                {/*Trading Ideas Notification*/}
                {(day === 6 || day === 0) && <Notification />}
                {/*Trading Ideas Stub*/}
                {(day === 6 || day === 0) && <Stub items={itemStub} />}
            </div>
        </div>
    );
};

export default TradingIdeas;

