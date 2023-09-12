import styles from './CompanyOverview.module.css'
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper'
import ContentPadding from '../ContentPadding/ContentPadding'

const CompanyOverview = () => {
  return (
    <section className={styles.container}>
        <LayoutWrapper>
            <ContentPadding>
                <h1>Company Overview</h1>
            </ContentPadding>
        </LayoutWrapper>
    </section>
  )
}
export default CompanyOverview