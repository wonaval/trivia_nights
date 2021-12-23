const DashPastEvents = (props) => {

    return (
        <div className="dashPastEvents">
            <div className='eventsHeader'>
                <span className='eventHeaderText'>Upcoming Events</span>
                <span><a href=''>Past Events</a></span>
            </div>
            <div className='eventList'>
                {props.eventList && props.eventList.map((event, i)=>{
                    const random = Math.floor(Math.random()*20)*5
                    return (
                        <div key={i} className='eventContainer'>
                            <div className='eventDate'>{event.date}</div>
                            <div className='eventName'>{event.name}</div>
                            <div className='eventVenue'>{event.venue}</div>
                            <div className='progressBorder'>
                                <span className='percent'>Event {random}% booked</span>
                                <div className='progressInner' style={{height : 33, width : `${random}%`}}></div>
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DashPastEvents