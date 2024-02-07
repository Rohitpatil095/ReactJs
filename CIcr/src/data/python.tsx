class python{
    python(){};
    private static pyData={
        "beginner":[
            "someVar=10",
            "usingDouble=10.3",
            "declaringString=\"Hello user\"",
            "# used for comments",
            "print(\"hello world\")",
            "input()"
        ]
    }

    public getPyData(playerLevel: string): string{
        let random= Math.random() * (this.getPyData.length);
        let currChallengeCode= python.pyData.{playerLevel}[random];
        return currChallengeCode;
    }
}

export {python};