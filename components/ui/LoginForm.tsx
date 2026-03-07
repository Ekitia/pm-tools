"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { AlertCircleIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log("email:", email);
        console.log("password:", password);
        setLoading(true);
        setError("");
        axios({
            method: 'post',
            url: 'https://pm-tools-api.kehosting.in/api/auth/login',
            data: {
                email: email,
                password: password
            }
        }).then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            router.push("/");
        }).catch(err => {
            console.dir(err.response.data);
            setError(err.response.data.error);
        }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {error && <Alert variant="destructive" className="max-w-md mb-3">
                        <AlertCircleIcon />
                        <AlertTitle>Whoops!</AlertTitle>
                        <AlertDescription>
                            {error}
                        </AlertDescription>
                    </Alert>}
                    <form onSubmit={handleSubmit}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </Field>
                            <Field>
                                <Button
                                    disabled={loading}
                                    type="submit">Login</Button>
                                <Button variant="outline" type="button">
                                    Login with Google
                                </Button>
                                <FieldDescription className="text-center">
                                    Don&apos;t have an account? <a href="#">Sign up</a>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

