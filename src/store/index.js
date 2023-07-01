import { createStore } from "vuex";
const arrUrl = "https://2420892.github.io/EOMP_Vue_json/Data/";
export default createStore({
  state: {
    skills: null,
    Education: null,
    work: null,
    projects: null,
    testimonials: null,
  },
  getters: {},
  mutations: {
    setSkills(state, skills) {
      state.skills = skills;
    },
    setEducation(state, value) {
      state.Educationn = value;
    },
    setWork(state, value) {
      state.work = value;
    },
    setProjects(state, value) {
      state.projects = value;
    },
    setTestimonials(state, value) {
      state.testimonials = value;
    },
  },
  actions: {
    async fetchSkills(context) {
      try {
        let res = await fetch(arrUrl);
        let { skills } = await res.json();
        context.commit("setSkills", skills);
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchEducation(context) {
      try {
        let res = await fetch(arrUrl);
        let { Education } = await res.json();
        context.commit("setEducation", Education);
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchWork(context) {
      try {
        let res = await fetch(arrUrl);
        let { work } = await res.json();
        context.commit("setWork", work);
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchProjects(context) {
      try {
        let res = await fetch(arrUrl);
        let { projects } = await res.json();
        context.commit("setProjects", projects);
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchTestimonials(context) {
      try {
        let res = await fetch(arrUrl);
        let { testimonials } = await res.json();
        context.commit("setTestimonials", testimonials);
      } catch (e) {
        console.log(e.message);
      }
    }
  },
  modules: {},
});
