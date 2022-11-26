import React from 'react'
import styles from './Sidebar.module.css'

export default function SideBar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>Страница пользователей</li>
                <li>Диалоги</li>
                <li>Сообщений</li>
            </ul>
        </nav>
    )
}
