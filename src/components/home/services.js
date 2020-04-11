import React from "react"
import Icon from "../icon"
import { Link } from "gatsby"

const data = [
    {
        icon: "coin-euro",
        body: "تتميز تركيا بمستوى اسعار بين المتوسط والمنخفض، وذلك حسب مدينة الدراسة سواء في تكلفة الدراسة الجامعية او المصاريف اليومية للطالب"
    },
    {
        icon: "sphere",
        body: "تعيش تركيا استقرارًا سياسيا واقتصاديا، حيث أنها تشكل سادس أكبر قوة اقتصادية على مستوى أوروبا، والسادسة عشرة على مستوى العالم"
    },
    {
        icon: "trophy1",
        body: "تعد الشهادات الممنوحة من الجامعات التركية ذات اعتراف دولي ومصادق عليها في غالبية الدول العربية وكذلك في أوروبا والأمريكيتين"
    },
    {
        icon: "study",
        body: "تعتبر تركيا من الدول المتقدمة في مجال التعليم، لما توليه من اهتمام وتطوير دائم للقطاع التعليمي، أضف إلى ذلك الشراكات مع جامعات أوربية وأمريكية"
    },

]

const ServiceCard = (content) => {
    return (
        <div className="col-md-3 col-sm-12">
            <div className="s-card ">
                <Icon className="s-card-icon" icon={content.icon} size="5rem" color="var(--color-primary)" />
                {/* <h4 className="s-card-title">{content.title}</h4> */}
                <p className="s-card-body">{content.body}</p>
            </div>
        </div>

    )
}

const Services = () => {
    return (
        <section className="section services-section">
            <div className="container">
                <h2 className="secondary-header text-center">مزايا الدراسة في تركيا</h2>
                <div className="row">
                    {data.map(item => {
                        return (
                            <ServiceCard icon={item.icon} title={item.title} body={item.body} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services;