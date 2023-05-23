import React from 'react';
import Card from 'react-bootstrap/Card';

const About = () => {
    const portfolioUrl = 'https://github.com/VadimOsin/';
    const portfolioGitUrl = 'https://github.com/VadimOsin/';
    const email = 'lljytnik@gmail.com';
    return (
        <Card className="about">
            <Card.Body>
                <Card.Title>Обо мне</Card.Title>
                <div> {/* Исправлено здесь */}
                    <Card.Text>
                        Я - разработчик React с опытом работы в веб-разработке. Я увлечен созданием интерактивных и
                        отзывчивых пользовательских интерфейсов с использованием современных технологий.

                        Вот некоторая информация обо мне:
                        <ul>
                            <li>Технологии: React, JavaScript, HTML, CSS</li>
                            <li>Знания: Redux, Bootstrap, REST API, Git</li>
                            <li>Образование: Диплом бакалавра по информатике</li>
                        </ul>

                        Я всегда открыт новым вызовам и готов учиться новым технологиям, чтобы улучшать свои навыки и
                        создавать качественные веб-приложения.

                        Если у вас есть какие-либо вопросы или проекты, с которыми вы хотели бы сотрудничать, не
                        стесняйтесь связаться со мной по адресу <a href={`mailto:${email}`}>{email}</a>. Также вы можете
                        посетить мое портфолио на GitHub: <a href={portfolioGitUrl}>{portfolioUrl}</a> или на моем
                        сайте <a href={portfolioUrl}>{portfolioUrl}</a>.
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default About;