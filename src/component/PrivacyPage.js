import React from "react";
import { Link } from 'react-router-dom';
const PrivacyPage = () => (
    <div>
        <div className="page-header">
            <div className="contain-container">
                <h1 className="page-header__title">Privacy</h1>
                <button className="button">
                    <i className="fas fa-arrow-alt-circle-left"></i>
                    <Link
                        to='/'
                        className="link--button"
                    >Go back to HomePage</Link>
                </button>
            </div>
        </div>
        <div className="contain-container">
            <h3>如果您想刪除與Expensify有關的Facebook登入應用數據，您可以按照以下步驟進行：</h3>
            <ol>
                <li>進入您的Facebook帳號的 <em>設定和隱私</em> 中點擊 <em>設定</em> </li>
                <li>向下滾動並點擊 <em>應用程式和網站</em></li>
                <li>找到並點擊 <em>Expensify</em></li>
                <li>點擊 <em>移除</em> 按鈕</li>
            </ol>
            <h3>恭喜您，您已經成功地刪除了您在Expensify應用程式中的資料。</h3>
        </div>
    </div>
)

export default PrivacyPage;