import axios from "axios";
import { serverApi } from "../../lib/config";
import { Member } from "../../lib/types/members";

class MemberService { 
    private readonly path: string;

    constructor() {
        this.path = serverApi;
    }

    public async getTopUsers(): Promise<Member[]> {
        try {
            const result = await axios.get(`${this.path}/member/top-users`);
            console.log("getTopUsers: ",result);
            return result.data;
        } catch (err) {
            console.log("Error, getTopUsers:", err);
            throw err;
        }
    }

}

export default MemberService;