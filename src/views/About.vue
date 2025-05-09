<template>
    <div class="about-page container py-5">
        <h1 class="mb-4 text-center">About This Project</h1>
        <p class="lead text-center mb-5">
            Our mobile game marketplace project aims to provide a seamless platform for discovering, reviewing, and
            purchasing the best mobile games — inspired by the App Store, but tailored for mobile gamers.
        </p>

        <div class="row mb-5">
            <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <i class="fas fa-users fa-3x text-primary mb-3"></i>
                        <h5 class="card-title">Our Team</h5>
                        <p class="card-text">
                            A passionate group of developers, designers, and testers working together to deliver a
                            high-quality and user-friendly platform.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <i class="fas fa-bullseye fa-3x text-success mb-3"></i>
                        <h5 class="card-title">Our Mission</h5>
                        <p class="card-text">
                            To create an intuitive and engaging marketplace where users can explore top-rated games,
                            leave reviews, and make informed purchases.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <i class="fas fa-tools fa-3x text-warning mb-3"></i>
                        <h5 class="card-title">Technologies Used</h5>
                        <p class="card-text">
                            Built with Vue 3, Vuex, Vue Router, Bootstrap 5, FontAwesome, and Axios — ensuring a modern,
                            scalable, and maintainable solution.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center">
            <router-link to="/" class="btn btn-primary">
                <i class="fas fa-arrow-left me-2"></i> Back to Home
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutView'
}
</script>

<style scoped>
.about-page {
    background-color: #f8f9fa;
    border-radius: 10px;
}

.card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>