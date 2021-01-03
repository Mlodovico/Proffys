//IMPORTS
import React from 'react';

//STYLES

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem'

import './styles.css';

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses sao os Proffys disponiveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horario</label>
                        <input type="text" id="subject"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}