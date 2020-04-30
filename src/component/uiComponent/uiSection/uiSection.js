import React from 'react';

const renderContent = (array, className) => {
    if (array) {
        return array.map((obj, index) => {
            return (
                <div key={index} className="repeated-section">
                    <img src={obj.icon} alt='icon' />
                    <h1>{obj.title}</h1>
                    <p>{obj.description}</p>
                </div>
            )
        })
    } else {
        return null;
    }
}


const UiSection = ({ title, paragraph, data, className }) => {
    return (
        <div className={className}>
            <div className="section-head">
                <h1 dangerouslySetInnerHTML={{ __html: title }} />
            </div>
            <div className="section-body">
                <p dangerouslySetInnerHTML={{ __html: paragraph }} />
            </div>
            <div className="section-footer">
                <div className="col-lg-12">
                    <div className="row">
                        {renderContent(data)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UiSection;