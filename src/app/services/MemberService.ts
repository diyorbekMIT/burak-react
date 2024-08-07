import axios from "axios";
import { serverApi } from "../../lib/config";
import { LoginInput, Member, MemberInput } from "../../lib/types/members";
import { Product } from "../../lib/types/product";

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


    public async getRestaurant(): Promise<Member> {
        try {
            const url = this.path + "/member/restaurant";
            const result = await axios.get(url);
            console.log("getRestaurant:", result);

            const restaurant: Member = result.data;
            return restaurant;
        } catch (err) {
            console.log("Error, getRestaurant:", err);
            throw err;
        }
    }

    public async signup (input: MemberInput): Promise<Member> {
        try {
            const url = this.path + "/member/signup";
            const result = await axios.post(url, input, {withCredentials: true});
            console.log("signup: ", result);

            const member: Member = result.data.member;
            console.log("member: ", member);
            localStorage.setItem("memberData", JSON.stringify(member));

            return member;
        } catch (err) {
            console.log("Error, signup:", err);
            throw err;
        }
    }

    public async login(input: LoginInput): Promise<Member> {
        try {
            const url = this.path + "/member/login";
            const result = await axios.post(url, input, {withCredentials: true});
            console.log("login: ", result);

            const member: Member = result.data.member;
            console.log("member: ", member);
            localStorage.setItem("memberData", JSON.stringify(member));

            return member;
        } catch (err) {
            console.log("Error, login:", err);
            throw err;
        }
    }

    
}

export default MemberService;