import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoundcloud.com%2Ffunny-guy-official&psig=AOvVaw1hoWk4IncxB0elylvTv6v1&ust=1609625323968000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjpid_f--0CFQAAAAAdAAAAABAI" alt="Avatar"/>
                        <div>
                            <strong>Nome do usuario</strong>
                            <span>Matematica</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta de matematica apaixonado por teoremas e calculos
                    </p>

                    <footer>
                        <p>
                            Preco/hora
                            <strong>R$ 50,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsAppIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
        )
    }