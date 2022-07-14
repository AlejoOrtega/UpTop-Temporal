# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


plans = [
    {
        title: 'Free Plan',
        description: 'Our free plan includes classes and the link to join discord, Join Us!',
        price: 0
    },
    {
        title: 'Premium Plan',
        description: 'Premium is a solid plan that includes more classes and premium role within our Discord',
        price: 35
    }
]

courses = [
    {
        title: 'Begginers Course',
        description: 'This is a course for begginers where we go over fundamentals',
        plan_id: 1,
        links:[
            {
                title: 'Class 1',
                link_url: 'https://www.youtube.com/embed/bJHr6_skXWc'
            },
            {
                title: 'Class 2',
                link_url: 'https://www.youtube.com/embed/bJHr6_skXWc?start=51'
            },
            {
                title: 'Class 3',
                link_url: 'https://www.youtube.com/embed/bJHr6_skXWc?start=142'
            },
            {
                title: 'Class 4',
                link_url: 'https://www.youtube.com/embed/bJHr6_skXWc?start=204'
            },
            {
                title: 'Class 5',
                link_url: 'https://www.youtube.com/embed/bJHr6_skXWc?start=273'
            },
            {
                title: 'Class 6',
                link_url: 'https://www.youtube.com/embed/bJHr6_skXWc?start=337'
            },
            {
                title: 'Class 7',
                link_url: 'https://www.youtube.com/embed/bJHr6_skXWc?start=443'
            },
            {
                title: 'Class 8',
                link_url: 'https://www.youtube.com/embed/bJHr6_skXWc?start=480'
            },
            {
                title: 'Class 9',
                link_url: 'https://www.youtube.com/embed/bJHr6_skXWc?start=518'
            },
            {
                title: 'Class 10',
                link_url: 'https://www.youtube.com/embed/bJHr6_skXWc?start=641'
            },
            {
                title: 'Class 11',
                link_url: 'https://www.youtube.com/embed/bJHr6_skXWc?start=685'
            },
            {
                title: 'Class 12',
                link_url: 'https://www.youtube.com/embed/bJHr6_skXWc?start=800'
            }
        ]
    },
    {
        title: 'Advance Course 001',
        description: 'This is the first advance course for price secrets',
        plan_id: 2,
        links:[
            {
                title: 'Class 1',
                link_url: 'https://www.youtube.com/embed/PJyvPV0l-Sw'
            },
            {
                title: 'Class 2',
                link_url: 'https://www.youtube.com/embed/PJyvPV0l-Sw?start=379'
            },
            {
                title: 'Class 3',
                link_url: 'https://www.youtube.com/embed/PJyvPV0l-Sw?start=547'
            },
            {
                title: 'Class 4',
                link_url: 'https://www.youtube.com/embed/PJyvPV0l-Sw?start=766'
            },
            {
                title: 'Class 5',
                link_url: 'https://www.youtube.com/embed/PJyvPV0l-Sw?start=953'
            },
            {
                title: 'Class 6',
                link_url: 'https://www.youtube.com/embed/PJyvPV0l-Sw?start=1168'
            }
        ]
    }
]

plans.each do |plan|
    Plan.create!(title: plan[:title], description: plan[:description], price: plan[:price])
end

courses.each_with_index do |course, index|
    newCourse = Course.create!(title: course[:title], description: course[:description], image_url:'', plan_id: index + 1)
    course[:links].each do |link|
        Link.create!(title: link[:title], link_url: link[:link_url], course_id: newCourse.id)
    end
end

User.create!(username: 'gosuto', password: '12345678', password_confirmation: '12345678', email: 'xrevollo96@gmail.com', name: 'alex', last_name: 'ortega', admin: true, banned: false, image_url: '')

# Plan.create!(title: 'Free', description: 'This is a free course to test new feature', price: 0)
# Plan.create!(title: 'Premium', description: 'This is a premium course for advance users', price: 35)

# Course.create!(title: 'Free Course', description: 'Free course to join us later :)', image_url:'data:image/png;base64,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', plan_id: 1)
# Course.create!(title: 'Premium Course', description:'This is the premium course for advance user', image_url:'data:image/png;base64,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', plan_id: 2)

# Link.create!(title: 'First Free class', link_url: 'https://www.youtube.com/watch?v=pXDx6DjNLDU', course_id: 1)
# Link.create!(title: 'Premium Class', link_url:'https://www.youtube.com/watch?v=H4bd6aox6ok', course_id: 2)

'Done!'