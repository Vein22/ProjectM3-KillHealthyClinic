interface TurnDto {
    date: string; 
    time: string; 
    userId: number; 
    status: "active" | "cancelled"; 
}

export default TurnDto;