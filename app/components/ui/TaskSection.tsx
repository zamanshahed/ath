import Button from "../buttons/Button";
import DateCard from "../cards/DateCard";
import GlassCard from "../cards/GlassCard";
import TaskCard from "../cards/TaskCard";

export default function TaskSection() {
    const tasks = [
        {
            dayName: "Sun",
            value: "3/11",
            isActive: false,
            isOrangeDot: false,
            isBlueDot: false,
        },
        {
            dayName: "Mon",
            value: "3/12",
            isActive: false,
            isOrangeDot: false,
            isBlueDot: false,
        },
        {
            dayName: "Tue",
            value: "3/13",
            isActive: true,
            isOrangeDot: false,
            isBlueDot: false,
        },
        {
            dayName: "Wed",
            value: "3/14",
            isActive: false,
            isOrangeDot: false,
            isBlueDot: false,
        },
        {
            dayName: "Thu",
            value: "3/15",
            isActive: false,
            isOrangeDot: false,
            isBlueDot: true,
        },
        {
            dayName: "Fri",
            value: "3/16",
            isActive: false,
            isOrangeDot: true,
            isBlueDot: false,
        },
        {
            dayName: "Sat",
            value: "3/17",
            isActive: false,
            isOrangeDot: false,
            isBlueDot: false,
        },
    ];
    return (
        <div>
            <GlassCard>
                <div className="flex items-center justify-between">
                    <div>Today's Tasks</div>
                    <Button>View Entire Schedule</Button>
                </div>

                <div className="flex items-center justify-between space-x-2 pt-4">
                    {tasks.map((task, index) => (
                        <DateCard
                            key={index}
                            dayName={task.dayName}
                            value={task.value}
                            isActive={task.isActive}
                            isOrangeDot={task.isOrangeDot}
                            isBlueDot={task.isBlueDot}
                        />
                    ))}
                </div>

                <div className="pt-5 space-y-2">
                    <TaskCard
                        isActive
                        title="Linebacker Drills"
                        description="Hawaii Trench Warriors"
                        isOrangeDot={false}
                        isLive={false}
                        isVidRequired={true}
                        dueDate={"Due Today"}
                        isCompleted={false}
                        actionBtnIcon="/images/icons/upload-circle-01.svg"
                        actionBtnText="Upload"
                    />
                    <TaskCard
                        title="University of Oregon Virtual Camp"
                        description="Hawaii Trench Warriors"
                        isOrangeDot={true}
                        isLive={true}
                        dueTime="5:30 pm"
                        isCompleted={false}
                        actionBtnIcon="/images/icons/bell.svg"
                        actionBtnText="Upload"
                    />
                    <TaskCard
                        title="QB Fundamentals"
                        description="Hawaii Trench Warriors"
                        isCompleted={true}
                        // actionBtnIcon="/images/icons/bell.svg"
                        actionBtnText="Done"
                    />
                    <TaskCard
                        title="Practice Reading Offense Quiz"
                        description="Hawaii Trench Warriors"
                        dueDate="3 days left"
                        actionBtnIcon="/images/icons/play.svg"
                        actionBtnText="Start"
                    />
                </div>
            </GlassCard>
        </div>
    );
}
