import Button from "../buttons/Button";
import CoachFeedbackCard from "../cards/CoachFeedbackCard";
import GlassCard from "../cards/GlassCard";

export default function CoachFeedbackSection() {
    return (
        <div>
            <GlassCard>
                <div className="flex items-center justify-between">
                    <div className="flex space-x-2 items-center">
                        <h2 className="text-xl font-semibold">
                            Coach Feedback
                        </h2>
                    </div>
                    <Button>View more</Button>
                </div>

                <div className="pt-4 space-y-2">
                    <CoachFeedbackCard
                        userName="Coach Sarah"
                        image="/images/user/coach-01.png"
                        feedbackMessage="Great progress on your strength training! 💪 Stay consistent and keep challenging yourself. You’re getting stronger every day — keep pushing! 🚀"
                        timeString="2h ago"
                    />
                    <CoachFeedbackCard
                        userName="Coach Sarah"
                        image="/images/user/coach-02.png"
                        feedbackMessage="Your squat form is looking much better! 🏋️️ Stay focused on technique each rep. Keep it up—you’re building real strength! 🔥"
                        timeString="3h ago"
                    />
                    <CoachFeedbackCard
                        userName="Coach Sarah"
                        image="/images/user/coach-03.png"
                        feedbackMessage="Solid improvement on your squat technique! Each rep looks more confident. Keep driving forward—you’re doing great! 🚀"
                        timeString="4h ago"
                    />
                </div>
            </GlassCard>
        </div>
    );
}
