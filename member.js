function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node.js'],
    showSkills: function () {
      this.skills.forEach(skill => {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
}