import React, { FormEvent, useState } from 'react';
import {useHistory} from "react-router-dom"

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../server/api';

export default function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [bio, setBio] = useState("");
    const [whatsapp, setWhatsapp] = useState("");


    const [subject, setSubject] = useState("");
    const [coust, setCoust] = useState("");

    const [schedule, setSchedule] = useState([
        { week_day: 0, from: "8:00 AM", to: "4:00 PM" },
    ]);

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name, 
            avatar, 
            whatsapp, 
            bio, 
            coust, 
            subject,
            cost: Number(coust),
            schedule,
        }).then(() => {
            alert('Cadastro realizado com sucesso!')
            history.push('/');
        }).catch(() => alert('Erro no cadastro'))
    };

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateSchedute = schedule.map((schedule, index) => {
            if(index === position) {
                return {...schedule, [field]: value}
            } 
            return schedule;
        });

        setSchedule(updateSchedute);
    };

    function addNewScheduleItem() {
        setSchedule([
            ...schedule,
            { week_day: 0, from: "", to: ""}
        ])
    };

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
             title="Que incrivel que voce quer dar aulas."
             description="O primeiro passo e preencher esse formulario"
             />

             <main>
                 <form onSubmit={handleCreateClass}>
                 <fieldset>
                     <legend>Seus dados</legend>

                     <Input 
                        name="name" 
                        label="Nome completo" 
                        value={name} 
                        onChange={value => setName(value.target.value)} 
                    />

                     <Input 
                        name="avatar" 
                        label="Avatar" 
                        value={avatar} 
                        onChange={value => setAvatar(value.target.value)}     
                    />

                     <Input
                        name="whatsapp" 
                        label="WhatsApp" 
                        value={whatsapp} 
                        onChange={value => setWhatsapp(value.target.value)} 
                    />

                     <TextArea 
                        name="bio" 
                        label="Biografia" 
                        value={bio} 
                        onChange={value => setBio(value.target.value)} 
                    />

                 </fieldset>

                 <fieldset>
                     <legend>Sobre a aula</legend>

                     <Select 
                     name="subject" 
                     label="Materia"
                     value={subject}
                     onChange={value => setSubject(value.target.value)}
                     options={[
                         {value: 'Matematica', label: 'Matematica'},
                         {value: 'Geografia', label: 'Geografia'},
                         {value: 'Historia', label: 'Historia'},
                         {value: 'Biologia', label: 'Biologia'},
                         {value: 'Informatica', label: 'Informatica'},
                         {value: 'Fisica', label: 'Fisica'},
                         {value: 'Portugues', label: 'Portugues'},
                     ]}
                     />
                     <Input 
                        name="cost" 
                        label="Custo da sua hora por aula" 
                        value={coust}
                        onChange={value => setCoust(value.target.value)}
                    />
                 </fieldset>

                 <fieldset>
                    <legend>
                         Horarios Disponiveis
                         <button type="button" onClick={() => addNewScheduleItem()}>+ Novo horario</button> 
                    </legend>

                    {schedule.map((item, index) => {
                        return (
                        <div key={item.week_day} className="schedule-item">
                        <Select 
                            name="week_day" 
                            label="Dia da semana"
                            onChange={value => setScheduleItemValue(index, 'week_day', value.target.value)}
                            value={item.week_day}
                            options={[
                                {value: '0', label: 'Segunda-feira'},
                                {value: '1', label: 'Terca-feira'},
                                {value: '2', label: 'Quarta-feira'},
                                {value: '3', label: 'Quinta-feira'},
                                {value: '4', label: 'Sexta-feira'},
                                {value: '5', label: 'Sabado'},
                            ]}
                        />
                        <Input 
                            name="from" 
                            label="Das" 
                            type="time" 
                            value={item.from}
                            onChange={value => setScheduleItemValue(index, 'from', value.target.value)}
                        />
                        <Input 
                            name="to" 
                            label="Ate" 
                            type="time" 
                            value={item.to}
                            onChange={value => setScheduleItemValue(index, 'to', value.target.value)}
                        />
                     </div>)
                    })}
                 </fieldset>
                 <footer>
                     <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                     </p>
                     <button type="submit">
                         Salvar cadastro
                     </button>
                 </footer>
                 </form>
             </main>
        </div>
    )
}