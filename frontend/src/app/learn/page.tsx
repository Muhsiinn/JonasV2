import { Header } from "@/components/layout/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

export default function LearnPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Start Learning German</h1>
            <p className="text-lg text-muted-foreground">
              Choose a topic and let AI generate a personalized story for you
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Learning Dashboard
              </CardTitle>
              <CardDescription>
                Your personalized German learning experience starts here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This is where the learning interface will be built. Features coming soon:
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                <li>AI-generated stories based on your interests</li>
                <li>Interactive chatbot for learning</li>
                <li>Vocabulary lists and spaced repetition</li>
                <li>Progress tracking</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

