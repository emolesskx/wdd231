const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'],
        completed: true  // Update if completed
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web...',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient programmers...',
        technology: ['Python'],
        completed: true  // Update if completed
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects...',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false  // Update if completed
    }
];

// Function to display courses
function displayCourses(filter = 'all') {
    const courseContainer = document.getElementById('course-list');
    courseContainer.innerHTML = '';

    let filteredCourses = courses;

    if (filter !== 'all') {
        filteredCourses = courses.filter(course => course.subject === filter);
    }

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course', course.subject);
        if (course.completed) {
            courseDiv.classList.add('completed');
        }

        courseDiv.innerHTML = `
            <h3>${course.subject} ${course.number} - ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            <p class="${course.completed ? 'status completed' : 'status incomplete'}">
                ${course.completed ? '✔ Completed' : '⏳ Not Completed'}
            </p>
        `;

        courseContainer.appendChild(courseDiv);
    });
}

// Event Listeners for Filtering
document.getElementById('all-btn').addEventListener('click', () => displayCourses('all'));
document.getElementById('cse-btn').addEventListener('click', () => displayCourses('CSE'));
document.getElementById('wdd-btn').addEventListener('click', () => displayCourses('WDD'));

// Initial Display
displayCourses();
