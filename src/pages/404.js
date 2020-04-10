import React from "react"
import Head from '../components/head'
import Layout from "../components/layout"
import { Link } from "gatsby"
import notFound from "../assets/img/404.jpg"

const NotFound = () => {
    const title = "الصفحة غير موجودة"
    return (
        <Layout>
            <Head title={title} />
            <section className="text-center">
                <img className="not-found" src={notFound} alt="404 page doesn't exist" />
                <h2 >الصفحة التي تبحث عنها غير موجودة</h2>
                <Link to="/">أضغط هنا للرجوع الى الصفحة الرئيسية</Link>
            </section>
        </Layout>
    )
}

export default NotFound
