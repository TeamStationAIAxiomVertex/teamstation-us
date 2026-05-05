const teamSize = document.querySelector("#team-size");
const teamSizeOutput = document.querySelector("#team-size-output");
const teamTopology = document.querySelector("#team-topology");
const teamRole = document.querySelector("#team-role");
const teamLevel = document.querySelector("#team-level");
const planTitle = document.querySelector("#plan-title");
const planSubtitle = document.querySelector("#plan-subtitle");
const planCopy = document.querySelector("#plan-copy");
const copyPlan = document.querySelector("#copy-plan");
const copyStatus = document.querySelector("#copy-status");
const bookingLink = document.querySelector("#booking-link");

const baseBookingUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq";

function buildPlanText() {
  return [
    "TeamStation starter plan:",
    `Team topology: ${teamTopology.value}`,
    `Role focus: ${teamRole.value}`,
    `Size: ${teamSize.value} people`,
    `Level mix: ${teamLevel.value}`,
    "Launch needs: Nebula AI sourcing, Axiom Cortex vetting, pricing plan, EOR, payroll, device, MDM, and access path."
  ].join("\n");
}

function updatePlan() {
  if (!teamSize || !teamSizeOutput || !teamTopology || !teamRole || !teamLevel || !planTitle || !planSubtitle) {
    return;
  }

  const size = teamSize.value;
  teamSizeOutput.textContent = size;
  planTitle.textContent = `${size} ${teamRole.value}`;
  planSubtitle.textContent = `${teamTopology.value} with ${teamLevel.value}.`;

  const planText = buildPlanText();

  if (planCopy) {
    planCopy.value = planText;
  }

  if (bookingLink) {
    const bookingUrl = new URL(baseBookingUrl);
    bookingUrl.searchParams.set("team_plan", planText);
    bookingLink.href = bookingUrl.toString();
  }

  if (copyStatus) {
    copyStatus.textContent = "";
  }
}

[teamSize, teamTopology, teamRole, teamLevel].forEach((control) => {
  if (control) {
    control.addEventListener("input", updatePlan);
    control.addEventListener("change", updatePlan);
  }
});

if (copyPlan && planCopy) {
  copyPlan.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(planCopy.value);
      if (copyStatus) {
        copyStatus.textContent = "Plan copied. Paste it into the booking form notes.";
      }
    } catch {
      planCopy.focus();
      planCopy.select();
      if (copyStatus) {
        copyStatus.textContent = "Select the plan text and copy it into the booking form notes.";
      }
    }
  });
}

updatePlan();
