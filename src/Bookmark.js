import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Bookmark = ({bookmarks}) => {


    return (
        <>
            {bookmarks.map((bookmark) => (
                <div key={bookmark.id} className="card">
                    <div className="hover_card">
                        <div className="hover_content">
                            <a className="hover-icons book-reader" href={bookmark.page_url} target="_blank">
                                <FontAwesomeIcon icon="book-reader"/>
                            </a>
                            <div className="hover-icons">
                                <FontAwesomeIcon icon="pencil-alt" />
                            </div>
                            <div className="hover-icons">
                                <FontAwesomeIcon icon="trash-alt" />
                            </div>
                        </div>
                    </div>
                    <div className="normal_card">
                        <div className="preview_image">
                            <img src={bookmark.preview_image} alt=""></img>
                        </div>

                        <div className="preview_text">
                            <div className="bookmark_title">
                                <h5>{bookmark.title}</h5>
                            </div>
                            <div className="preview_description_wrap">
                                <div className="preview_description">
                                    <p>{bookmark.description}</p>
                                </div>
                            </div>
                        
                            <div className="text_footnote">
                                <div className="bookmark_domain">
                                    <FontAwesomeIcon icon="thumbtack" className="icon_footnote"/>
                                    <p>{bookmark.domain}</p>
                                </div>
                                <div className="date_created">
                                    <FontAwesomeIcon icon="calendar-day" className="icon_footnote"/>
                                    <p>{bookmark.date_created}</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            ))}
        </>
    )
}

export default Bookmark