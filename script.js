const teamSize = document.querySelector("#team-size");
const teamSizeOutput = document.querySelector("#team-size-output");
const teamRole = document.querySelector("#team-role");
const teamSpeed = document.querySelector("#team-speed");
const planTitle = document.querySelector("#plan-title");

function updatePlan() {
  if (!teamSize || !teamSizeOutput || !teamRole || !teamSpeed || !planTitle) {
    return;
  }

  const size = teamSize.value;
  const role = teamRole.value;
  const speed = teamSpeed.value;
  teamSizeOutput.textContent = size;
  planTitle.textContent = `${size} ${role}`;
  planTitle.setAttribute("aria-label", `${size} ${role}. ${speed}.`);
}

[teamSize, teamRole, teamSpeed].forEach((control) => {
  if (control) {
    control.addEventListener("input", updatePlan);
    control.addEventListener("change", updatePlan);
  }
});

updatePlan();
