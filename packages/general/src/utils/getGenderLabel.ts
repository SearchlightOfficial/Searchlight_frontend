export function getGenderLabel(genderCode: number): string {
    switch (genderCode) {
        case 0:
            return "남성";
        case 1:
            return "여성";
        case 2:
            return "알 수 없음";
        default:
            return "Invalid code";
    }
}