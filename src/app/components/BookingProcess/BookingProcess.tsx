import ContentPadding from '../ContentPadding/ContentPadding'
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper'
import styles from './BookingProcess.module.css'

const BookingProcess = () => {
  return (
    <LayoutWrapper>
        <ContentPadding>
            <h2 className={styles.heading}>Booking Process</h2>
        </ContentPadding>
    </LayoutWrapper>
  )
}
export default BookingProcess